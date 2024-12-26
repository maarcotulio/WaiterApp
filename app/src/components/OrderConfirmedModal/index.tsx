import { Modal } from "react-native";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";

interface OrderConfrimedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({
  visible,
  onOk,
}: OrderConfrimedModalProps) {
  return (
    <Modal animationType="fade" visible={visible}>
      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>
          Pedido Confirmado
        </Text>
        <Text opacity={0.9} color="#fff" style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">
            Ok
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
