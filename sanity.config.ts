import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'
import {visionTool} from '@sanity/vision'

const Config = defineConfig({
  projectId: 'za534iy9',
  name: 'default',
  title: 'medium-sanity',
  basePath : "/admin" ,
  apiVersion:"7/30/2023",
  dataset:"production",
  plugins: [deskTool() ,visionTool()],
  schema:{ types:schemaTypes},
  useCdn: true,
})

export default Config
