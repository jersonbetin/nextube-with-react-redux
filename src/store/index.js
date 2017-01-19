import * as config from './configureStore'

if (process.env.NODE_ENV === 'production'){
  const store = config.configureStoreProd()
  module.exports = store
}else{
  const store = config.configureStore()
  module.exports = store
}

