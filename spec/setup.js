import 'jest-extended'
import 'jest-chain'
import './expect'

import dotenv from 'dotenv'

dotenv.config()

console.log('SETUP', process.env.SPEC_APP_ID)
