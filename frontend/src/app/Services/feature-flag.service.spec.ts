/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { FeatureFlagService, SCORE_BOARD_FEATURE_FLAG_KEY } from './feature-flag.service'

describe('FeatureFlagService', () => {
  beforeEach(() => {
    localStorage.removeItem(SCORE_BOARD_FEATURE_FLAG_KEY)
  })

  describe('defaultScoreBoard', () => {
    it('should default to v2', (done) => {
      const service = new FeatureFlagService()
      service.defaultScoreBoard$.subscribe((value) => {
        expect(value).toBe('v2')
        done()
      })
    })
    it('should read value from localStorage', (done) => {
      localStorage.setItem(SCORE_BOARD_FEATURE_FLAG_KEY, 'v1')
      const service = new FeatureFlagService()
      service.defaultScoreBoard$.subscribe((value) => {
        expect(value).toBe('v1')
        done()
      })
    })
    it('should update observable when values is updated', (done) => {
      const service = new FeatureFlagService()
      service.setDefaultScoreBoard('v1')
      service.defaultScoreBoard$.subscribe((value) => {
        expect(value).toBe('v1')
        done()
      })
    })
  })
})
