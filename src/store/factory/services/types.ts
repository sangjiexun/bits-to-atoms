import { Entity } from '../entity/types';
import { MaterialType } from '../../material/types';
import { Cuboid } from '../../common/primitive/types';
import { LiquidAsset } from '../../economic/types';
import { BasicShape } from '../../common/topology/types';
import { ActivityType, Activity } from '../../workflow/types';

export enum ServiceType {
  Procurement = 'Procurement',
  Floorspace = 'Floorspace',
  HumanWorker = 'HumanWorker',
  FFFPrinter = 'FFFPrinter',
  Dispatch = 'Dispatch'
}

// This any is required to allow arbitary mapping from Serivce provider parameters in UI forms to object values.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface BaseServiceProvider extends Entity<any> {
  type: ServiceType;
  capabilities: ActivityType[];
  canBid: boolean;
  currentActivity: Activity | undefined;
  currentCostPerTime: LiquidAsset;
}

export type ProcurementServiceProvider = BaseServiceProvider;

export type StorageServiceProvider = BaseServiceProvider;

export interface TransportServiceProvider extends BaseServiceProvider {
  capactityMass: number;
  movementVelocity: number;
}

export interface TransmutationServiceProvider extends BaseServiceProvider {
  supportedInputTopologies: BasicShape[];
  supportedOutputTopologies: BasicShape[];
  supportedMaterials: MaterialType[];
  outputVolume: Cuboid;
}

export type DispatchServiceProvider = BaseServiceProvider;

export type ServiceProvider =
  | ProcurementServiceProvider
  | StorageServiceProvider
  | TransportServiceProvider
  | TransmutationServiceProvider
  | DispatchServiceProvider;
