import Button from "./components/Button"
const Joblist = () => {
  return (
    <div className="flex flex-col bg-amber-300 w-[600px] h-[200px] rounded-md">
      <div className="flex flex-row bg-blue-200 h-[30%]">
        <div className="w-[100px] h-[100%] bg-fuchsia-300">
          profile image
        </div>
        <div className="flex flex-col h-full w-full">
          <h2>Social Media Assistant</h2>
          <p>
            Sed ut perspiciatis unde omnisequi nesciunt.
          </p>
        </div>
        
      </div>
      <div className="h-[50%]">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
      </div>
      <div className="flex flex-row justify-start  h-[20%]">
        <Button />
        <Button />
        <Button />
      </div>

    </div>
  )
}

export default Joblist