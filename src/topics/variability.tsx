import React from 'react'
import { Topic } from '../components/topic'

export const variabilityQualifiers = (
  <Topic title="Variability">
    <Topic.Item
      title={
        <b>
          <code>constant</code>
        </b>
      }
    />
    <Topic.Item
      title={
        <b>
          <code>parameter</code>
        </b>
      }
    />
    <Topic.Item
      title={
        <b>
          <code>discrete</code>
        </b>
      }
    />
  </Topic>
)
