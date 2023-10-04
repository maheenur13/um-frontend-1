import StepperForm from "@/components/StepperForm"

const CreateStudent = () => {
  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  return (
    <div>
      <h2>Create Student</h2>
      <StepperForm steps={steps} />
    </div>
  )
}

export default CreateStudent
