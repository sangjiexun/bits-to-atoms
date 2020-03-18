import { MaterialType } from '../../../material/types';
import { ServiceType } from '../types';
import { HumanWorker } from './types';

import { createNewIdentity } from '../../../common/identity/factories';
import {
  createVector3,
  createQuaternion,
  createCuboid
} from '../../../common/primitive/factories';
import { createLiquidAsset } from '../../../economic/factories';
import { BasicShape } from '../../../common/topology/types';
import { ActivityType } from '../../../workflow/types';

export function createHumanWorker({
  capabilities = [ActivityType.Transportation, ActivityType.Transmutation],
  canBid = true,
  currentActivity = undefined,
  id = createNewIdentity({ displayName: 'default-humanworker' }),
  location = createVector3(),
  orientation = createQuaternion(),
  bounds = createCuboid({
    min: createVector3({ x: -0.2, y: -0.2 }),
    max: createVector3({ x: 0.2, y: 0.2, z: 1.5 })
  }),
  currentCostPerTime = createLiquidAsset({ dollars: 1e-6 }),
  capactityMass = 5,
  movementVelocity = 0.5,
  supportedTopologyTransitions = [
    [BasicShape.RoughCube, BasicShape.Cube],
    [BasicShape.RoughCylinder, BasicShape.Cylinder]
  ] as [BasicShape, BasicShape][],
  supportedMaterials = [MaterialType.SimplePolymer],
  outputVolume = createCuboid()
} = {}): HumanWorker {
  return {
    type: ServiceType.HumanWorker,
    capabilities,
    canBid,
    currentActivity,
    id,
    location,
    orientation,
    bounds,
    currentCostPerTime,
    capactityMass,
    movementVelocity,
    supportedTopologyTransitions,
    supportedMaterials,
    outputVolume
  };
}
