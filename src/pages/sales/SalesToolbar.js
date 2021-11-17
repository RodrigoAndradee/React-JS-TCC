import React from "react";
import { Select, DatePicker, Input } from "antd";
import PropTypes from "prop-types";

// Constants
import { ORDERS_TYPE } from "../../constants/ordersConstants";
import { PAYMENT_PLACES, PAYMENT_TYPES } from "../../constants/salesConstants";

// Helpers
import { UI_DEFAULT_FORMAT } from "../../helpers/DateGeneratorHelper";

// Styles
import { StyledSalesToolbar } from "./SalesToolbar.styles";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

export default function SalesToolbar({
  setSelectedOrderType,
  setSelectedPaymentPlace,
  setSelectedPaymentType,
  setSelectedRangeDate,
  setTypedSearch,
}) {
  return (
    <StyledSalesToolbar>
      <Select
        className="filter-option"
        defaultValue={ORDERS_TYPE.finished}
        onChange={(e) => setSelectedOrderType(e)}
        placeholder="Selecione um status de pedido"
      >
        <Option key={ORDERS_TYPE.finished}>Finalizado</Option>
        <Option key={ORDERS_TYPE.rejected}>Rejeitado</Option>
      </Select>

      <Search
        className="filter-option"
        placeholder="Pesquisa"
        onChange={(e) => setTypedSearch(e.target.value)}
      />

      <RangePicker
        allowClear
        className="filter-option"
        onChange={(e) => setSelectedRangeDate(e)}
        format={UI_DEFAULT_FORMAT}
        placeholder={["Data Inicial", "Data Final"]}
      />

      <Select
        allowClear
        className="filter-option"
        onChange={(e) => setSelectedPaymentType(e)}
        placeholder="Meio de pagamento"
      >
        <Option key={PAYMENT_TYPES.MONEY}>Dinheiro</Option>
        <Option key={PAYMENT_TYPES.CARD}>Cartão</Option>
      </Select>

      <Select
        allowClear
        className="filter-option"
        onChange={(e) => setSelectedPaymentPlace(e)}
        placeholder="Local pagamento"
      >
        <Option key={PAYMENT_PLACES.APP}>Pagamento pelo aplicativo</Option>
        <Option key={PAYMENT_PLACES.DESTINATION}>Pagamento na entrega</Option>
      </Select>
    </StyledSalesToolbar>
  );
}

SalesToolbar.propTypes = {
  setSelectedOrderType: PropTypes.func,
  setSelectedPaymentPlace: PropTypes.func,
  setSelectedPaymentType: PropTypes.func,
  setSelectedRangeDate: PropTypes.func,
  setTypedSearch: PropTypes.func,
};

SalesToolbar.defaultProps = {
  setSelectedOrderType: () => {},
  setSelectedPaymentPlace: () => {},
  setSelectedPaymentType: () => {},
  setSelectedRangeDate: () => {},
  setTypedSearch: () => {},
};
