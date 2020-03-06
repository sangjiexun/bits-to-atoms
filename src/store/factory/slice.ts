import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Identity } from '../common/identity/types';
import { createFactory } from './factories';
import {
  Parameter,
  //ParameterType,
  NumberParameter
} from '../common/parameter/types';
//import { selectedServiceProviderIdSelector } from '../selected/selectors';

const factorySlice = createSlice({
  name: 'factory',
  initialState: createFactory(),
  reducers: {
    setIdentity(state, action: PayloadAction<Identity>) {
      state.identity = action.payload;
    },
    setServiceProviderParameter(
      state,
      action: PayloadAction<{
        serviceProviderId: Identity;
        parameter: Parameter;
      }>
    ) {
      // Get the associated service provider from the application state.
      const serviceProvider = state.serviceProviders.find(
        sp => sp.id.uuid === action.payload.serviceProviderId.uuid
      );
      if (!serviceProvider) return;

      const numberParameter = action.payload.parameter as NumberParameter;
      serviceProvider.location.x = numberParameter.value;

      /*console.log(
        'At this point we find the parameter inside the service provider somehow and update it.'
      );*/

      //const parameter = serviceProvider.
    }
  }
});

export const {
  setIdentity,
  setServiceProviderParameter
} = factorySlice.actions;

export const factoryReducer = factorySlice.reducer;
