import AssistUI from 'assist-ui'
import 'assist-ui/dist/assist-ui.css'

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(AssistUI)
  }
}
