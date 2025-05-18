import { Button, Typography } from "@material-tailwind/react"
import { ReactElement, useState } from "react"
import { BsBorderStyle } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { HiOutlineTableCells } from "react-icons/hi2";
import TableForms from "./TableForms";

interface Operation {
    icon: ReactElement,
    name: string,
    onClick: () => void;
}

const RegionTableOpr = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentOperation, setCurrentOperation] = useState<Operation | null>(null);

    const handleOperationClick = (operation: Operation) => {
        setCurrentOperation(operation);
        setIsModalOpen(true);
    };

    const handleOpen = () => setIsModalOpen(!isModalOpen);

    const operations: Operation[] = [
        {
            icon: <CiSquarePlus />,
            name: "Yeni Bölge Ekle",
            onClick: () => {
                console.log("Yeni Bölge Ekle tıklandı!");
            },
        },
        {
            icon: <HiOutlineTableCells />,
            name: "Bölgeleri Düzenle",
            onClick: () => {
                console.log("Bölgeleri düzenleye tıklandı!");
            },
        },
        {
            icon: <BsBorderStyle />,
            name: "Bölgeleri Sırala",
            onClick: () => {
                console.log("Bölgeleri sırala tıklandı!");
            },
        },
        {
            icon: <CiSquarePlus />,
            name: "Yeni Masa Ekle",
            onClick: () => {
                console.log("Yeni Masa Ekle tıklandı!");
            },
        },
    ]
    return (
        <div className="flex gap-2">
            {operations.map((opr,i) => (
                <Button key={i} className="flex gap-1 items-center justify-center capitalize bg-transparent text-gray-700 shadow-none"
                    onClick={() => handleOperationClick(opr)}
                >
                    <div className="text-2xl text-green-600"> {opr.icon} </div>
                    <Typography className="font-semibold font-serif" variant="small"> {opr.name} </Typography>
                </Button>
            ))}
            {isModalOpen && currentOperation && (
                <TableForms
                    isOpen={isModalOpen}
                    handleOpen={handleOpen}
                    operation={currentOperation}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    )
}

export default RegionTableOpr