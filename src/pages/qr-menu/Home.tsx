import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

const steps = [
  {
    icon: '/images/cafe.png',
    title: 'Bölgeleri Oluştur',
    description: 'Masalar bölümünden işletmenize ait bölgeleri listeleyin.',
  },
  {
    icon: '/images/qr-code.png',
    title: 'QR Kod Üret',
    description:
      'QR Menu kullanılacak olan bölgelerin altında bulunan Karekod üret seçeneğini seçin.',
  },
  {
    icon: '/images/download.png',
    title: 'Şablonu İndir',
    description:
      'Karşınıza gelecek 4 adet şablondan dilediğinizi cihazınıza indirebilirsiniz.',
  },
  {
    icon: '/images/printer.png',
    title: 'Çıktı Al',
    description:
      'Oluşturduğunuz karekodların çıktısını alarak masaların üzerinde uygun gördüğünüz bir yere yerleştiriniz.',
  },
  {
    icon: '/images/menu.png',
    title: 'QR Menü',
    description:
      'Müşterilerin telefonlarında görünmesi için istediğiniz ürünler için "ürün menüde gösterilsin" seçeneğini aktif edin, istersiniz ürüne ait görsel ekleyin.',
  },
  {
    icon: '/images/scan-qr.png',
    title: 'QR Kod Tarama',
    description:
      'Artık müşterilerinizin tek yapması gereken bulundukları masadaki QR Kodu telefonlarının kameralarına okutmak olacak.',
  },
];

interface StepItemProps {
  icon: string,
  title: string,
  description: string
}

const StepItem: React.FC<StepItemProps> = ({ icon, title, description }) => (
  <TimelineItem className="mt-10">
    <TimelineConnector />
    <TimelineHeader className="h-3">
      <TimelineIcon className="bg-gray-200 mt-8">
        <img src={icon} alt={title} className="w-20 h-20 object-cover" />
      </TimelineIcon>
      <Typography variant="h6" color="blue-gray" className="leading-none">
        {title}
      </Typography>
    </TimelineHeader>
    <TimelineBody className="pb-8">
      <Typography
        variant="small"
        color="gray"
        className="font-normal lg:w-5/6 text-justify text-gray-600"
      >
        {description}
      </Typography>
    </TimelineBody>
  </TimelineItem>
);

const QRHome = () => {
  return (
    <div className="w-full lg:mt-16 p-4 flex flex-col lg:flex-row justify-between gap-10">
      <Timeline>
        {steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => (
          <StepItem
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </Timeline>
      <Timeline>
        {steps.slice(Math.ceil(steps.length / 2)).map((step, index) => (
          <StepItem
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </Timeline>
    </div>
  );
};

export default QRHome;
