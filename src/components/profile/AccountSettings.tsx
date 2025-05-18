import { Button, Card, Typography } from "@material-tailwind/react"
import Header from "./Header"

const AccountSettings = () => {
  return (
    <div className='w-full flex flex-col items-center mt-4 rounded-xl'>
      <Card className='w-1/2 flex flex-col bg-white p-4 justify-center rounded-sm'>
        <Header />
        <div className='flex flex-col px-8 mt-2 lg:space-y-2'>
          <Typography variant="h6" className="font-inter font-semibold"> Üyelik İptali </Typography>
          <div className="p-4">
            <hr />
          </div>
          <Typography variant="paragraph" className="font-roboto text-justify"> Üyelik iptaliniz sonrası, mevcut aboneliğiniz paket bitiş tarihi tarihine kadar aktif kalacaktır. Bu tarihe kadar sistemi kullanmaya devam edebilirsiniz.
          </Typography>
          <Typography variant="paragraph" className="font-roboto text-justify"> Abonelik süreniz sona erdiğinde hesabınız kalıcı olarak silinecek ve tüm verileriniz geri alınamaz şekilde sistemden kaldırılacaktır.
          </Typography>
        </div>
        <div className='flex justify-end mt-6 mr-6'>
          <Button className='px-8 py-2 capitalize bg-red-600 rounded-md'>
            <Typography variant='h6' className='font-inter text-white'> Üyeliği İptal Et </Typography>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default AccountSettings