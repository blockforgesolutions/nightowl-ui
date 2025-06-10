import { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Chip,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Alert
} from "@material-tailwind/react";

export default function ClubCoatCheckSystem() {
    // State for coat check system
    const [totalSpaces, setTotalSpaces] = useState(50);
    const [usedSpaces, setUsedSpaces] = useState(0);
    const [receiptNumber, setReceiptNumber] = useState(1001);
    const [activeTab, setActiveTab] = useState("check-in");
    const [items, setItems] = useState<{ id: number, receiptNum: number, description: string, checkInTime: string }[]>([]);

    // State for UI
    const [itemDescription, setItemDescription] = useState("");
    const [retrieveNum, setRetrieveNum] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState<"green" | "red" | "blue">("green");
    const [showReceipt, setShowReceipt] = useState(false);
    const [currentReceipt, setCurrentReceipt] = useState<{ receiptNum: number, description: string, checkInTime: string } | null>(null);

    // Calculate available spaces
    const availableSpaces = totalSpaces - usedSpaces;

    const tabs = [
        {
            value: "check-in",
            label: "Drop Item",
        },
        {
            value: "check-out",
            label: "Retrieve Item",
        },
        {
            value: "items",
            label: "Items",
        },
    ]

    // Format time
    const formatTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Handle check-in
    const handleCheckIn = () => {
        if (!itemDescription.trim()) {
            setAlertMessage("Lütfen eşya açıklaması giriniz!");
            setAlertColor("red");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        if (availableSpaces <= 0) {
            setAlertMessage("Üzgünüz, boş yer kalmadı!");
            setAlertColor("red");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        const newItem = {
            id: Date.now(),
            receiptNum: receiptNumber,
            description: itemDescription,
            checkInTime: formatTime()
        };

        setItems([...items, newItem]);
        setUsedSpaces(usedSpaces + 1);
        setItemDescription("");
        setReceiptNumber(receiptNumber + 1);
        setCurrentReceipt(newItem);
        setShowReceipt(true);
    };

    // Handle check-out
    const handleCheckOut = () => {
        const num = parseInt(retrieveNum);

        if (isNaN(num)) {
            setAlertMessage("Lütfen geçerli bir fiş numarası giriniz!");
            setAlertColor("red");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        const itemIndex = items.findIndex(item => item.receiptNum === num);

        if (itemIndex === -1) {
            setAlertMessage("Bu numaraya ait eşya bulunamadı!");
            setAlertColor("red");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }

        const newItems = items.filter(item => item.receiptNum !== num);

        setItems(newItems);
        setUsedSpaces(usedSpaces - 1);
        setRetrieveNum("");
        setAlertMessage(`${num} numaralı eşya başarıyla teslim edildi!`);
        setAlertColor("green");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 w-full">
            <Card className="w-full max-w-4xl bg-gray-800 text-white">
                <CardHeader
                    color="blue"
                    className="mb-4 grid h-20 place-items-center bg-gradient-to-r from-purple-600 to-blue-500"
                >
                    <Typography variant="h3" color="white">
                        Club Coat Check
                    </Typography>
                </CardHeader>

                <CardBody className="flex flex-col gap-4">
                    {showAlert && (
                        <Alert color={alertColor} onClose={() => setShowAlert(false)}>
                            {alertMessage}
                        </Alert>
                    )}

                    <div className="flex justify-between gap-2 mb-4">
                        <div className="flex-1 p-3 rounded-lg bg-gray-700">
                            <Typography variant="small" className="mb-1 text-gray-300">
                                Total
                            </Typography>
                            <Typography variant="h4" className="font-bold text-center">
                                {totalSpaces}
                            </Typography>
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-gray-700">
                            <Typography variant="small" className="mb-1 text-gray-300">
                                Used
                            </Typography>
                            <Typography variant="h4" className="font-bold text-center text-blue-400">
                                {usedSpaces}
                            </Typography>
                        </div>
                        <div className="flex-1 p-3 rounded-lg bg-gray-700">
                            <Typography variant="small" className="mb-1 text-gray-300">
                                Available
                            </Typography>
                            <Typography variant="h4" className="font-bold text-center text-green-400">
                                {availableSpaces}
                            </Typography>
                        </div>
                    </div>

                    <Tabs value={activeTab} onChange={(value: string) => setActiveTab(value as string)}>
                        <TabsHeader className="bg-gray-700">
                            {tabs.map(({ value, label }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={`${activeTab === value ? "text-gray-900" : "text-gray-300"} font-onest`}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value="check-in" className="px-0">
                                <div className="space-y-4">
                                    <div className="p-3 bg-gray-700 rounded-lg flex justify-between items-center">
                                        <Typography className='text-white'>Next Receipt No:</Typography>
                                        <Chip color="blue" value={receiptNumber} className="ml-2" />
                                    </div>

                                    <Input
                                        color="white"
                                        label="Item Description"
                                        value={itemDescription}
                                        onChange={(e) => setItemDescription(e.target.value)}
                                        className="!text-white"
                                        containerProps={{ className: "!text-white" }}
                                        labelProps={{ className: "text-gray-300" }} crossOrigin={undefined} />

                                    <Button
                                        fullWidth
                                        onClick={handleCheckIn}
                                        color="blue"
                                        className="bg-gradient-to-r from-purple-600 to-blue-500"
                                    >
                                        Receive Item
                                    </Button>
                                </div>
                            </TabPanel>

                            <TabPanel value="check-out" className="px-0">
                                <div className="space-y-4">
                                    <Input
                                        color="white"
                                        label="Receipt Number"
                                        value={retrieveNum}
                                        onChange={(e) => setRetrieveNum(e.target.value)}
                                        type="number"
                                        className="!text-white"
                                        containerProps={{ className: "!text-white" }}
                                        labelProps={{ className: "text-gray-300" }} crossOrigin={undefined} />

                                    <Button
                                        fullWidth
                                        onClick={handleCheckOut}
                                        color="green"
                                    >
                                        Deliver Item
                                    </Button>
                                </div>
                            </TabPanel>

                            <TabPanel value="items" className="px-0">
                                <div className="space-y-2 max-h-64 overflow-auto pr-2">
                                    {items.length === 0 ? (
                                        <Typography className="text-center text-white 400 py-8">
                                            There are no registered items
                                        </Typography>
                                    ) : (
                                        items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="p-3 bg-gray-700 rounded-lg flex justify-between items-center"
                                            >
                                                <div>
                                                    <Typography variant="small" className="font-medium text-white">
                                                        {item.description}
                                                    </Typography>
                                                    <Typography variant="small" color="gray" className="text-gray-400">
                                                        Time of receipt: {item.checkInTime}
                                                    </Typography>
                                                </div>
                                                <Chip color="blue" value={item.receiptNum} />
                                            </div>
                                        ))
                                    )}
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </CardBody>

                <CardFooter className="pt-0">
                    <Typography variant="small" className="text-gray-400 text-center">
                        Today {new Date().toLocaleDateString()} — Total fee: 30₺/item
                    </Typography>
                </CardFooter>
            </Card>

            {/* Receipt Dialog */}
            <Dialog open={showReceipt} handler={() => setShowReceipt(false)}>
                <DialogHeader>Delivery Receipt</DialogHeader>
                <DialogBody>
                    {currentReceipt && (
                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <Typography variant="h3" className="font-bold mb-2">
                                    {currentReceipt.receiptNum}
                                </Typography>
                                <Typography className="mb-1">
                                    {currentReceipt.description}
                                </Typography>
                                <Typography variant="small" color="gray">
                                    Delivery time: {currentReceipt.checkInTime}
                                </Typography>
                                <Typography variant="small" color="gray">
                                    {new Date().toLocaleDateString()}
                                </Typography>
                            </div>

                            <div className="bg-yellow-50 p-3 rounded text-yellow-800">
                                <Typography variant="small">
                                    Please show this receipt when you pick up your item. Identity check will be made in case of lost receipt.
                                </Typography>
                            </div>
                        </div>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => setShowReceipt(false)}
                    >
                        Okay
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}