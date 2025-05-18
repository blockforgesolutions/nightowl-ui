import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";


interface TableFormsProps {
  operation: {
    name: string;
  };
  isOpen: boolean;
  handleOpen: () => void;
  onClose: () => void;
}

const TableForms: React.FC<TableFormsProps> = ({ operation, isOpen, handleOpen, onClose }) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted for:", operation.name);
    // onClose();
  };

  return (
    <Dialog open={isOpen} size="xs" handler={handleOpen}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1 font-roboto" variant="h5">
            {operation.name}
          </Typography>
        </DialogHeader>
        <IconButton onClick={onClose} className="lg:mr-4" variant="text">
          <IoMdClose className="text-2xl" />
        </IconButton>
      </div>
      <DialogBody>
        <ModalContent operation={operation} />
      </DialogBody>
      <DialogFooter className="space-x-2 ">
        <Button variant="text" color="red" onClick={handleOpen} className="capitalize">
          İptal
        </Button>
        <Button variant="gradient" color="green" onClick={handleSubmit} className="capitalize">
          Kaydet
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default TableForms

interface ModalContentProps {
  operation: {
    name: string;
  };
}

const ModalContent: React.FC<ModalContentProps> = ({ operation }) => {
  const renderContent = () => {
    switch (operation.name) {
      case "Yeni Bölge Ekle":
        return (
          <div className="flex flex-col">
            <p>Burada yeni bir bölge ekleyebilirsiniz.</p>
            <div className="mt-2">
              <Input className="rounded-xl" label="Bölge Adı" placeholder="Bahçe" required crossOrigin={undefined} />
            </div>
          </div>
        );
      case "Yeni Masa Ekle":
        return (
          <div className="flex flex-col">
            <p>Burada yeni bir masa ekleyebilirsiniz.</p>
            <div className="mt-2">
              <Input className="rounded-xl" label="Masa Adı" placeholder="Masa 1" required crossOrigin={undefined} />
            </div>
          </div>
        );
      case "Bölgeleri Düzenle":
        return (
          <div className="flex flex-col">
            <h3>Bölge Düzenle</h3>
            <p>Burada mevcut bir bölgeyi güncelleyebilirsiniz.</p>
          </div>
        );
      case "Bölgeleri Sırala":
        return (
          <div>
            <h3>Bölge Düzenle</h3>
            <p>Burada mevcut bir bölgeyi güncelleyebilirsiniz.</p>
          </div>
        );
      default:
        return <div>İşlem bilinmiyor.</div>;
    }
  };

  return <div>{renderContent()}</div>;
}