export const userColumns = [
  {
    field: "brand",
    headerName: "Brand",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.brand}
        </div>
      );
    },
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 230,
  },
  {
    field: "costDollar",
    headerName: "Cost $",
    width: 80,
  },
  {
    field: "costTK",
    headerName: "Cost TK",
    width: 80,
  },
  {
    field: "shippingCost",
    headerName: "Shipping Cost $",
    width: 180,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "sellPrice",
    headerName: "Sell Price $",
    width: 180,
  },
  // {
  //   field: "category",
  //   headerName: "Category",
  //   width: 140,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
