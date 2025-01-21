import { Table } from "antd";

export default function StudioList() {

  

    const columns = [
        {
            title: "#SI No.",
            dataIndex: "transIs",
            key: "transIs",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Studio Name",
            dataIndex: "studioName",
            key: "studioName",
        },
        {
            title: "Address",
            dataIndex: "Address",
            key: "Address",
        },
        {
            title: "Overall Rating",
            dataIndex: "Rating",
            key: "Rating",
        },
        {
            title: "Total Review",
            dataIndex: "Review",
            key: "Review",
           
        },
      
    ];


    const data = Array.from({ length: 3 }, (_, index) => ({
        key: index,
        transIs: `${index + 1}`,
        studioName: "Adamos Studio",
        Address: "Dhaka, Bangladesh",
        Rating: "4.5",
        Review: 10,

    }));
    return (
        <div>
            <div className="space-y-[24px] border rounded-lg h-screen">
                <div className="rounded-lg py-[16px]">
                    <div className="px-6 pb-5 flex justify-between items-center">
                        <h3 className="text-2xl font-semibold text-playground">
                        Studio List
                        </h3>
                    </div>


                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            position: ["bottomCenter"],
                            showQuickJumper: true,
                        }}
                    />
                </div>


            </div>
        </div>
    )
}
