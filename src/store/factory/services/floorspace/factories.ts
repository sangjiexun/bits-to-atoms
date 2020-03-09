import { Identity } from '../../../common/identity/types';
import { Vector3, Quaternion, Cuboid } from '../../../common/primitive/types';
import { createNewIdentity } from '../../../common/identity/factories';
import {
  createVector3,
  createQuaternion,
  createCuboid
} from '../../../common/primitive/factories';
import { ServiceType } from '../types';
import { FloorSpace } from './types';
import { createLiquidAsset } from '../../../economic/factories';

export const createFloorSpace = (
  id: Identity = createNewIdentity({ displayName: 'default-floorspace' }),
  location: Vector3 = createVector3(),
  orientation: Quaternion = createQuaternion(),
  bounds: Cuboid = createCuboid({
    min: createVector3({ x: -4, y: -2 }),
    max: createVector3({ x: 4, y: 2, z: 2 })
  }),
  currentCostPerTime = createLiquidAsset({ dollars: 1e-6 })
): FloorSpace => {
  return {
    type: ServiceType.Floorspace,
    id,
    location,
    orientation,
    bounds,
    currentCostPerTime
  };
};
