import {types} from '../task/types'
import { mutations} from './mutations'
import { quaries } from './quaries'
import { resolvers } from './resolvers'

export const Task ={
    types,
    resolvers,
    quaries,
    mutations
}