import { Button, Card, CardBody, IconButton, Typography } from "@material-tailwind/react"
import { CiSettings } from "react-icons/ci"
import { packetDetail } from "../../mock_data"
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import DetailForms from "./DetailForms";

const AccountDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState("");
    const handleOpen = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="w-full flex flex-col p-2">
            <Card className="shadow-md">
                <CardBody>
                    <div className="flex justify-between items-center">
                        <Typography variant="h6" className="font-serif font-semibold"> Hesabınız </Typography>
                        <Button onClick={() => { setModalName('changePlan'); handleOpen() }} variant="text" className="flex items-center capitalize">
                            <CiSettings className="text-xl text-green-600" />
                            <Typography variant="small" className="font-inter font-semibold text-green-600"> Planı Değiştir </Typography>
                        </Button>
                    </div>
                    <div className="bg-green-200/30 rounded-md p-4 flex flex-col">
                        <Typography className="text-[12px] font-inter font-semibold"> Aktif Paketiniz </Typography>
                        <Typography variant="h6" className="font-inter font-semibold"> {packetDetail.packetName} </Typography>
                        <Typography className="text-[11px] font-inter "> Maksimum {packetDetail.maxUser} Kullanıcı Sayısı </Typography>
                        <div className="p-2">
                            <hr className="border-t border-gray-400" />
                        </div>
                        <div className="flex justify-between">
                            <Typography className="text-[12px] font-inter font-semibold"> Üyelik Tarihiniz </Typography>
                            <Typography className="text-[12px] font-inter font-bold"> {packetDetail.membershipStartDate} </Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography className="text-[12px] font-inter font-semibold"> Üyelik Bitiş Tarihiniz </Typography>
                            <Typography className="text-[12px] font-inter font-bold"> {packetDetail.membershipEndDate} </Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography className="text-[12px] font-inter font-semibold"> Kullanılan <strong> 1 gün </strong> </Typography>
                            <Typography className="text-[12px] font-inter font-bold"> Kalan <strong>29 gün</strong> </Typography>
                        </div>
                    </div>
                    <Button fullWidth className="bg-green-600 border-none capitalize mt-4 rounded-md">
                        Süreyi Uzat / Ödeme Yap
                    </Button>
                </CardBody>
            </Card>
            <Card className="mt-4">
                <CardBody>
                    <Typography variant="h6" className="font-serif font-semibold"> Ödeme Yöntemleri </Typography>
                    <div className="bg-green-200/20 rounded-md p-4 flex flex-col">
                        <div className="flex justify-between items-center p-2">
                            <Typography variant="small" className="font-inter font-bold"> {packetDetail.paymentDetail.bank} </Typography>
                            <IconButton variant="text">
                                <MdDelete className="text-lg text-red-600" />
                            </IconButton>
                        </div>
                        <div className="flex justify-between items-center p-2">
                            <Typography className="text-[12px] font-inter font-bold"> {packetDetail.paymentDetail.cartNumber} </Typography>
                            <Typography className="text-[12px] font-inter font-bold"> {packetDetail.paymentDetail.expiryDate} </Typography>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="mt-4">
                <CardBody>
                    <div className="flex justify-between items-center">
                        <Typography variant="h6" className="font-serif font-semibold"> Fatura Bilgileri </Typography>
                        <Button onClick={() => { setModalName('changeInvoice'); handleOpen() }} variant="text" className="flex items-center capitalize gap-1">
                            <CiSettings className="text-xl text-green-600 mt-[1px]" />
                            <Typography variant="small" className="font-inter font-semibold text-green-600"> Düzenle </Typography>
                        </Button>
                    </div>
                    <div className="border-b border-gray-600 mt-2">
                        <Typography className="font-inter font-semibold"> {packetDetail.invoiceDetails.fullName} - {packetDetail.invoiceDetails.city} </Typography>
                    </div>
                </CardBody>
            </Card>
            {isModalOpen && (
                <DetailForms changeName={modalName} handleOpen={handleOpen} isOpen={isModalOpen} />
            )}
        </div>
    )
}

export default AccountDetails