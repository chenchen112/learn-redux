import React from "react";
import { Button, Space, Typography, List, InputNumber, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { CartState, CartActions, Product } from "../types";

const { Text, Title } = Typography;

interface ShoppingCartDisplayProps {
  state: CartState;
  actions: CartActions;
}

const ShoppingCartDisplay: React.FC<ShoppingCartDisplayProps> = ({
  state,
  actions,
}) => {
  const totalPrice = actions.getTotalPrice();
  const totalItems = actions.getTotalItems();

  return (
    <div className="scenario-section">
      <div className="scenario-title">场景 4: 购物车</div>
      <Space direction="vertical" style={{ width: "100%" }} size="small">
        <List
          size="small"
          dataSource={state.products}
          style={{ maxHeight: 150, overflow: "auto" }}
          renderItem={(product: Product) => {
            const inCart = state.items.find(
              (item) => item.product.id === product.id,
            );
            return (
              <List.Item
                actions={[
                  <Button
                    key="add"
                    type="primary"
                    size="small"
                    onClick={() => actions.addToCart(product)}
                    disabled={product.stock === 0}
                  >
                    {inCart ? "再加" : "加入"}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={product.name}
                  description={`¥${product.price} | 库存: ${product.stock}`}
                />
              </List.Item>
            );
          }}
        />

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 8 }}>
          <Text strong>购物车 ({totalItems} 件)</Text>
          {state.items.length === 0 ? (
            <Empty
              description="购物车为空"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ) : (
            <>
              <List
                size="small"
                dataSource={state.items}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <InputNumber
                        key="qty"
                        min={1}
                        max={item.product.stock}
                        value={item.quantity}
                        onChange={(val) =>
                          actions.updateQuantity(item.product.id, val || 1)
                        }
                        size="small"
                        style={{ width: 60 }}
                      />,
                      <Button
                        key="delete"
                        type="text"
                        danger
                        size="small"
                        icon={<DeleteOutlined />}
                        onClick={() => actions.removeFromCart(item.product.id)}
                      />,
                    ]}
                  >
                    <Text>
                      {item.product.name} - ¥{item.product.price}
                    </Text>
                  </List.Item>
                )}
              />
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <Title level={5} style={{ margin: 0 }}>
                  总计: ¥{totalPrice.toFixed(2)}
                </Title>
                <Button
                  size="small"
                  danger
                  onClick={actions.clearCart}
                  style={{ marginTop: 4 }}
                >
                  清空购物车
                </Button>
              </div>
            </>
          )}
        </div>
      </Space>
    </div>
  );
};

export default ShoppingCartDisplay;
