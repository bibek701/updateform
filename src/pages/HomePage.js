import { useSelector } from "react-redux"
import { useNavigate } from "react-router";

const HomePage = () => {


  const { infos } = useSelector((store) => store.userData);

  // let data = [{ id: 1, label: 'lio' }, { id: 2, label: 'sio' }];
  //   data =data.map((o) => o.id ===1 ? {id: 1, label: 'kio'}: o );

  const nav = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-5 p-4">

      {infos.map((info) => {
        return <div key={info.id} className="shadow-lg">
          <img src={info.preview} alt="" />
          <div>
            <h1>{info.username}</h1>
            <p>{info.email}</p>
            <p>Gender: {info.gender}</p>
            <p>Country: {info.country}</p>
            <p>{info.msg.substring(0, 50)}</p>

            <h3>My Hobbies</h3>
            <hr />
            <div className="flex space-x-2">
              {info.hobby.map((ho, i) => {
                return <p className="" key={i}>{ho}</p>

              })}
            </div>

            <div className="flex justify-end px-2 py-1">
              <button onClick={() => nav(`/update/${info.id}`)} ><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            </div>

          </div>
        </div>
      })}


    </div >
  )
}
export default HomePage