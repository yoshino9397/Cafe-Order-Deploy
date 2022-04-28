import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
import { BsCheckSquareFill } from "react-icons/bs";

const Order = ({ order }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src={`${PF}paid.png`} width={100} height={100} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <BsCheckSquareFill
                fontSize="20px"
                color="green"
                style={{ marginTop: "2vh" }}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src={`${PF}bake.png`}  width={100} height={100} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <BsCheckSquareFill fontSize="20px" style={{ marginTop: "2vh" }} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src={`${PF}way.png`}  width={100} height={100} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <BsCheckSquareFill fontSize="20px" style={{ marginTop: "2vh" }} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src={`${PF}delivered.png`}  width={100} height={100} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <BsCheckSquareFill fontSize="20px" style={{ marginTop: "2vh" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`${process.env.URL}/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
