import { createSelector } from 'reselect';
import { RootState } from '../index';
import { Factory } from './types';
import { InputRegion, OutputRegion } from './boundaries/types';
import { EconomicSummary, Asset } from '../economic/types';
import { ServiceProvider } from './services/types';
import { createLiquidAsset } from '../economic/factories';
import { BuildRequest } from '../buildrequest/types';
import { config } from '../../env/config';

export const factorySelector = (state: RootState) => state.factory;

export const factoryActiveBuildRequestsSelector = createSelector(
  [factorySelector],
  (factory: Factory): BuildRequest[] => {
    return factory.activeBuildRequests;
  }
);

export const isAllowedToBidSelector = createSelector(
  [factoryActiveBuildRequestsSelector],
  (factoryActiveBuildRequests: BuildRequest[]) => {
    return (
      factoryActiveBuildRequests.length < config.factory.maxNumberActiveBuilds
    );
  }
);

export const factoryInputRegionSelector = createSelector(
  [factorySelector],
  (factory: Factory): InputRegion => {
    return factory.inputRegion;
  }
);

export const factoryOutputRegionSelector = createSelector(
  [factorySelector],
  (factory: Factory): OutputRegion => {
    return factory.outputRegion;
  }
);

export const factoryAssetsSelector = createSelector(
  [factorySelector],
  (factory: Factory): Asset[] => {
    return factory.assets;
  }
);

export const factoryServiceProvidersSelector = createSelector(
  [factorySelector],
  (factory: Factory): ServiceProvider[] => {
    return factory.serviceProviders;
  }
);

export const factoryEconomicSummarySelector = createSelector(
  [factoryAssetsSelector, factoryServiceProvidersSelector],
  (assets: Asset[], serviceProviders: ServiceProvider[]): EconomicSummary => {
    // Compute total asset value
    const currentAssetsValue = assets.reduce((prev, curr) => {
      return { dollars: prev.dollars + curr.dollars };
    });

    // Compute total service provider cost per second
    let currentServiceProvidersCostPerSecond = 0;
    serviceProviders.forEach(p => {
      currentServiceProvidersCostPerSecond += p.currentCostPerTime.dollars;
    });

    return {
      currentAssetsValue,
      totalOut: createLiquidAsset({
        dollars: currentServiceProvidersCostPerSecond
      }),
      totalIn: createLiquidAsset({ dollars: 0 })
    };
  }
);
