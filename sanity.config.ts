import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

const Config = defineConfig({
  name: 'default',
  title: 'medium-sanity',
  basePath : "/admin" ,
  apiVersion:"7/30/2023",
  projectId: 'za534iy9',
  dataset: 'production',
  plugins: [deskTool()],
  schema:{ types:schemaTypes}
})

export default Config
