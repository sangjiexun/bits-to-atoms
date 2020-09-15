/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useIpfsGltfLoader } from '../../../../../store/ipfs/use-ipfs-gltf-loader';
import { ModelProxy } from './ModelProxy';

type GLTFResult = GLTF & {
  nodes: {
    mergedBlocks_1_0: THREE.Mesh;
    mergedBlocks_1_1: THREE.Mesh;
    mergedBlocks_1_2: THREE.Mesh;
    mergedBlocks_1_3: THREE.Mesh;
  };

  materials: {
    custom2: THREE.MeshStandardMaterial;
    custom1: THREE.MeshStandardMaterial;
    custom3: THREE.MeshStandardMaterial;
    _defaultMat: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();

  const result = useIpfsGltfLoader<GLTFResult>(
    'QmbdSeJfWsUm5ghb9pp98qwnbTbzKN8BvtarJhRTmTxhCw'
  );

  if (result) {
    const { nodes, materials } = result;
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          material={materials.custom2}
          geometry={nodes.mergedBlocks_1_0.geometry}
        />
        <mesh
          material={materials.custom1}
          geometry={nodes.mergedBlocks_1_1.geometry}
        />
        <mesh
          material={materials.custom3}
          geometry={nodes.mergedBlocks_1_2.geometry}
        />
        <mesh
          material={materials._defaultMat}
          geometry={nodes.mergedBlocks_1_3.geometry}
        />
      </group>
    );
  } else {
    return ModelProxy();
  }
}