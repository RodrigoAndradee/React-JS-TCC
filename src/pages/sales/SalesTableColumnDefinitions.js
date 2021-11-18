/* eslint-disable import/no-cycle */
import React from "react";
import moment from "moment";
import { Col, Row, Tooltip } from "antd";
import {
  CalendarOutlined,
  DollarCircleOutlined,
  HomeOutlined,
  MobileOutlined,
  SearchOutlined,
} from "@ant-design/icons";

// Components
import TableTitle from "../../components/table/title/TableTitle";
import TableTag from "../../components/table/tag/TableTag";

// Constants
import {
  DEFAULT_CELL_ALIGNMENT,
  SALES_DATA_INDEXES,
  STATUS_TYPES,
} from "../../constants/salesConstants";

// Helpers
import { getSortedData } from "../../helpers/SalesHelpers";
import { UI_DEFAULT_FORMAT } from "../../helpers/DateGeneratorHelper";

const {
  CREATED_DATE,
  EMAIL,
  ORDER_NUMBER,
  ORDER_STATUS,
  PAYMENT_TYPE,
  REJECT_JUSTIFICATION,
  SUBTOTAL_VALUE,
  TAX_VALUE,
  TOTAL_VALUE,
} = SALES_DATA_INDEXES;

export const expandedColumns = () => {
  const rows = [
    {
      dataIndex: "name",
      key: "name",
      title: "Itens",
    },
    {
      align: DEFAULT_CELL_ALIGNMENT,
      dataIndex: "price",
      key: "price",
      title: <TableTitle message="Preço" icon={<DollarCircleOutlined />} />,
      width: "100px",
    },
    {
      align: DEFAULT_CELL_ALIGNMENT,
      dataIndex: "quantity",
      key: "quantity",
      title: "Quantidade",
      width: "10px",
    },
  ];

  return rows;
};

export default (justificationColumn) => {
  const rows = [
    {
      title: "Detalhes dos pedidos",
      fixed: "top",
      children: [
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: ORDER_NUMBER,
          fixed: "left",
          key: ORDER_NUMBER,
          sorter: (a, b) => getSortedData(a, b, ORDER_NUMBER),
          title: "N.º Pedido",
          width: 100,
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: CREATED_DATE,
          // filterDropdown: ({
          //   setSelectedKeys,
          //   selectedKeys,
          //   confirm,
          //   clearFilters,
          // }) => {
          //   return (
          //     <FilterDropdown
          //       clearFilters={clearFilters}
          //       confirm={confirm}
          //       selectedKeys={selectedKeys}
          //       setSelectedKeys={setSelectedKeys}
          //     >
          //       <RangePicker />
          //     </FilterDropdown>
          //   );
          // },
          filterIcon: <SearchOutlined />,
          fixed: "left",
          keu: CREATED_DATE,
          render: (date) => moment(date).format(UI_DEFAULT_FORMAT),
          // sorter: (a, b) => {
          //   getSortedData(a, b, CREATED_DATE);
          // },
          title: <TableTitle message="Data" icon={<CalendarOutlined />} />,
          width: 120,
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: EMAIL,
          key: EMAIL,
          title: "E-mail",
          width: 300,
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: ORDER_STATUS,
          key: ORDER_STATUS,
          title: "Status",
          width: 120,
          render: (status) => {
            return <TableTag message={STATUS_TYPES[status]} tagType={status} />;
          },
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: PAYMENT_TYPE,
          key: PAYMENT_TYPE,
          title: "Pagamento",
          width: 130,
          type: "radio",
          // filters: [
          //   {
          //     text: "Pagamento em Casa",
          //     value: "HOME",
          //     children: [
          //       { text: "Dinheiro", value: "MONEY" },
          //       { text: "Cartão", value: "CARD" },
          //     ],
          //   },
          //   {
          //     text: "Pagamento pelo aplicativo",
          //     value: "HOME",
          //     children: [
          //       { text: "Dinheiro", value: "MONEY" },
          //       { text: "Cartão", value: "CARD" },
          //     ],
          //   },
          // ],
          render: (paymentType) => {
            const { homePaymentRequest, cardPaymentRequest } = paymentType;

            let message;
            let tagType;
            let rowSize;

            if (homePaymentRequest) {
              if (homePaymentRequest === "MONEY") {
                tagType = "money";
                message = "Dinheiro";
              } else {
                tagType = "card";
                message = "Cartão";
              }
              rowSize = 12;
            }

            if (cardPaymentRequest) {
              message = "Cartão";
              tagType = "card";
              rowSize = 12;
            }

            return (
              <Row gutter={[16, 16]}>
                <Col span={rowSize}>
                  <TableTag message={message} tagType={tagType} />
                </Col>

                {homePaymentRequest && (
                  <Col span={rowSize} className="payment-type-icon">
                    <Tooltip title="Pagamento no local da entrega">
                      <HomeOutlined />
                    </Tooltip>
                  </Col>
                )}

                {cardPaymentRequest && (
                  <Col span={rowSize} className="payment-type-icon">
                    <Tooltip title="Pagamento pelo aplicativo">
                      <MobileOutlined />
                    </Tooltip>
                  </Col>
                )}
              </Row>
            );
          },
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: TAX_VALUE,
          key: TAX_VALUE,
          title: <TableTitle message="Taxa" icon={<DollarCircleOutlined />} />,
          width: 90,
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: SUBTOTAL_VALUE,
          key: SUBTOTAL_VALUE,
          sorter: (a, b) => getSortedData(a, b, SUBTOTAL_VALUE),
          title: (
            <TableTitle message="Subtotal" icon={<DollarCircleOutlined />} />
          ),
          width: 120,
        },
        {
          align: DEFAULT_CELL_ALIGNMENT,
          dataIndex: TOTAL_VALUE,
          key: TOTAL_VALUE,
          sorter: (a, b) => getSortedData(a, b, TOTAL_VALUE),
          title: <TableTitle message="Total" icon={<DollarCircleOutlined />} />,
          width: 100,
        },
      ],
    },
  ];

  if (justificationColumn) {
    rows[0].children.splice(8, 0, {
      dataIndex: REJECT_JUSTIFICATION,
      key: REJECT_JUSTIFICATION,
      title: "Justificativa",
      width: 430,
    });
  }

  return rows;
};
