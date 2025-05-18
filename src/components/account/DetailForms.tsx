import { Button, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react"
import React from "react";

const PACKETS = [
    {
        packetName: 'Lite Paket',
        maxUser: "3",
        amount: 660.00,
    },
    {
        packetName: 'Standart Paket',
        maxUser: "7",
        amount: 990.00,
    },
    {
        packetName: 'Pro Paket',
        maxUser: "Sınırsız",
        amount: 1250.00,
    },
]

interface PacketInvoiceDetailsProps {
    isOpen: boolean;
    handleOpen: () => void;
}

const PacketDetails: React.FC<PacketInvoiceDetailsProps> = ({ isOpen, handleOpen }) => {
    return (
        <Dialog open={isOpen} handler={handleOpen} >
            <DialogHeader>Paket Planını Düzenle</DialogHeader>
            <DialogHeader className="text-md font-normal font-inter">Geçiş Yapabileceğiniz Paketler</DialogHeader>
            <DialogBody className="p-6">
                {PACKETS.map((packet, index) => {
                    return (
                        <div className="border rounded-xl p-4 mt-4 border-green-600 flex justify-between items-center" key={index}>
                            <div className="flex gap-2 items-center">
                                <Checkbox crossOrigin={undefined} />
                                <div className="flex flex-col">
                                    <Typography variant="h6" className="font-inter font-semibold"> {packet.packetName} </Typography>
                                    <Typography variant="small" className="font-inter"> Kullanıcı Sayısı: {packet.maxUser} </Typography>
                                </div>
                            </div>
                            <div>
                                <Typography variant="small" className="font-inter"> Ödenecek Tutar </Typography>
                                <Typography variant="h6" className="font-inter font-semibold"> ₺{packet.amount.toFixed(2)} / ay </Typography>
                            </div>
                        </div>
                    )
                })}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1 capitalize"
                >
                    <span>İptal</span>
                </Button>
                <Button variant="gradient" color="green" className="capitalize" onClick={handleOpen}>
                    <span>Kaydet</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

const InvoiceDetails: React.FC<PacketInvoiceDetailsProps> = ({ isOpen, handleOpen }) => {
    return (
        <Dialog open={isOpen} handler={handleOpen}>
            <DialogHeader>Paket Planını Düzenle</DialogHeader>
            <DialogHeader>Geçiş Yapabileceğiniz Paketler</DialogHeader>
            <DialogBody>
                Geçiş Yapabileceğiniz Paketler
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}


interface DetailFormsProps {
    changeName: string,
    isOpen: boolean;
    handleOpen: () => void;
}

const DetailForms: React.FC<DetailFormsProps> = ({ changeName, isOpen, handleOpen }) => {
    switch (changeName) {
        case "changePlan":
            return (
                <PacketDetails isOpen={isOpen} handleOpen={handleOpen} />
            );
        case "changeInvoice":
            return (
                <InvoiceDetails isOpen={isOpen} handleOpen={handleOpen} />
            )
        default:
            return (
                <div> No Content </div>
            )
    }
}

export default DetailForms