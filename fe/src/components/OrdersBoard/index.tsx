import { useState } from "react";
import { toast } from "react-toastify";

import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { api } from "../../utils/api";

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  const hasOrders = orders.length > 0;

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast(`O status da mesa ${selectedOrder?.table} foi alterado!`);
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        isLoading={isLoading}
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {hasOrders && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
