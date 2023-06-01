import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useAppDispatch, RootState } from "@/redux/store";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { getUsers } from "@/redux/contact.slice";
import DeleteModal from "@/components/ModalCustom";
import { useRouter } from "next/router";
import Paginate from "@/components/Paginate";
import { SortAscendingOutlined } from "@ant-design/icons";
import { showToastMessage } from "@/toastify/toastify.global";
import { deleteUsers } from "@/redux/getuser.slice";
import { titles } from "@/item.global";

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number>(0);
  const [page, setPage] = useState(1);
  const data = useSelector((state: RootState) => state.get.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(getUsers(page));
    dispatch(getUsers(page));
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const deleteReview = async (id: number) => {
    // await dispatch(deleteUsers(id));
    showToastMessage("success", "Thành công");
    setIsModalOpen(false);
  };

  const sortById = async (id: number) => {
    // await dispatch(getUsersSort(id));
    showToastMessage("success", "Thành công");
  };
  return (
    <div className="mt-20">
      <button
        onClick={() => {
          router.push("/addcontact");
        }}
        className="fixed right-60 top-5 bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add User
      </button>
      {data.length !== 0 ? (
        <table className="mx-auto font-sans text-xs w-11/12 p-10 text-center table table-fixed">
          <thead className="font-serif">
            <tr>
              {titles.map((items) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <th
                    className={
                      !data ? "hidden" : "border border-black px-3 h-16"
                    }
                  >
                    {items}
                    <span
                      onClick={() => {
                        sortById(page);
                      }}
                      className="ml-5 border p-3 hover:animate-pulse hover:bg-green-300"
                    >
                      <SortAscendingOutlined />
                    </span>
                  </th>
                );
              })}
              <th className="border border-black px-3">Option</th>
              <th className="border border-black px-3">Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <>
                <tr key={item.id}>
                  <td className="border border-gray-400 rounded-lg p-5">
                    {item.id}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item.email}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item.first_name}
                  </td>
                  <td className="border border-gray-400 rounded-lg">
                    {item.last_name}
                  </td>
                  <td className="border border-gray-400 rounded-lg flex items-center justify-center">
                    <img src={item.avatar} alt="" />
                  </td>

                  <td className="pl-3">
                    <button
                      className="bg-red-500 font-bold text-white w-2/3 h-10"
                      onClick={() => {
                        setId(item.id);
                        dispatch(deleteUsers(id));
                        setIsModalOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="pl-3">
                    <button
                      className="bg-blue font-bold text-white w-2/3 h-10"
                      onClick={() => {
                        router.push("/addcontact");
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
      {isModalOpen && (
        <DeleteModal
          isCloseModal={() => {
            setIsModalOpen(false);
          }}
          isDelete={() => {
            deleteReview(id);
          }}
        />
      )}
      <ToastContainer />
      <Paginate />
    </div>
  );
}
