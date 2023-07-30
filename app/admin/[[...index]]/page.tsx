"use client"
import React from 'react'
import { NextStudio } from 'next-sanity/studio'
import Config from '@/sanity.config'

function page() {
  return (<NextStudio config={Config}></NextStudio> )
}

export default page
