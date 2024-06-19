import Auth from "../components.tsx/Auth"
import Quote from "../components.tsx/Quote"

function Signup() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="hidden lg:block">
          <Quote/>
        </div>
      </div>
    </div>
  )
}

export default Signup