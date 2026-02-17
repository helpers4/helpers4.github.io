import { defineConfig } from '@builder.io/qwik/optimizer';
import { extendConfig } from '@builder.io/app-tools';
import baseConfig from '../../qwik.base.config';

export default extendConfig(baseConfig, defineConfig({}));
