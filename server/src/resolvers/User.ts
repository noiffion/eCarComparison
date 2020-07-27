import {
  Arg,
  FieldResolver,
  Query,
  Mutation,
  Resolver,
  Ctx,
  Root,
} from 'type-graphql'
import UserSchema from '../schemas/User'

@Resolver(() => UserSchema)
export class UserResolver {
  @Query(() => String)
  sample(): string {
    return 'Hello'
  }
}
