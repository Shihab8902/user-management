import SectionTitle from "./components/SectionTitle";
import UserCard from "./components/UserCard";
import useGetUsers from "./hooks/useGetUsers"

const App = () => {

  const { data: users, refetch, isPending } = useGetUsers();

  //Data based on their categories
  const incomplete = users?.filter(user => user?.category === "incomplete") || [];
  const todo = users?.filter(user => user?.category === "todo") || [];
  const doing = users?.filter(user => user?.category === "doing") || [];
  const review = users?.filter(user => user?.category === "review") || [];
  const completed = users?.filter(user => user?.category === "completed") || [];
  const overdone = users?.filter(user => user?.category === "overdone") || [];




  return <div >


    <div className=" flex px-5 pt-5 max-w-screen-2xl mx-auto  gap-6 overflow-x-auto h-screen ">


      {/* Incomplete container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="Incomplete" color="bg-red-600" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{incomplete?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : todo?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>



      {/* Todo container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="To Do" color="bg-blue-400" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{incomplete?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : incomplete?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>




      {/* Doing container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="Doing" color="bg-yellow-400" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{doing?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : doing?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>




      {/* Under Review container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="Under Review" color="" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{review?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : review?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>






      {/* Completed container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="Completed" color="" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{completed?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : completed?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>





      {/* Overdone container */}
      <div className="h-full w-80 flex-none pb-20 overflow-hidden bg-gray-100">

        {/* Section heading */}
        <div className="flex  justify-between items-center p-3 ">
          <SectionTitle heading="Overdone" color="" />
          <span className="px-3 py-2 rounded font-semibold bg-gray-200">{overdone?.length}</span>
        </div>

        <div className="h-full overflow-y-auto p-2">
          {
            isPending ? ""
              : overdone?.map(user => <UserCard key={user?._id} user={user} refetch={refetch} />)
          }
        </div>

      </div>


    </div>







  </div>

}

export default App