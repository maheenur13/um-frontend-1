import BreadCrumbWrapper from "@/components/ui/BreadCrumb"
import { getUserInfo } from "@/services/auth.service"

const CreateFaculty = () => {
  const {role} = getUserInfo();
  return (
    <div>
      {/* <BreadCrumbWrapper
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
            },
          ]}
        /> */}
      CreateFaculty</div>
  )
}

export default CreateFaculty