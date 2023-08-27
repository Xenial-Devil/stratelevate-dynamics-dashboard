// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '../views/apps/apps/todo/store'
import chat from '../views/apps/apps/chat/store'
import users from '../views/apps/apps/user/store'
import email from '../views/apps/apps/email/store'
import kanban from '../views/apps/apps/kanban/store'
import invoice from '../views/apps/apps/invoice/store'
import calendar from '../views/apps/apps/calendar/store'
import ecommerce from '../views/apps/apps/ecommerce/store'
import dataTables from '../views/apps/apps/tables/data-tables/store'
import permissions from '../views/apps/apps/roles-permissions/store'

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions
}

export default rootReducer
