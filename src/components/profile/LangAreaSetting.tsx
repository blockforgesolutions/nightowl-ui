import { Button, Card, Option, Select, Typography } from '@material-tailwind/react'
import Header from './Header'

const CURRENCIES = [
  {
    title: 'Türk Lirası - ₺',
    value: 'try'
  },
  {
    title: 'Dolar - $',
    value: 'usd'
  },
  {
    title: ' Euro - €',
    value: 'eur'
  }
]

const LANGUAGES = [
  {
    title: 'Türkçe',
    value: 'tr'
  },
  {
    title: 'English',
    value: 'en'
  },
  {
    title: 'German',
    value: 'de'
  }
]

const LangAreaSettings = () => {
  return (
    <div className='w-full flex flex-col items-center mt-4 rounded-xl'>
      <Card className='w-1/2 flex flex-col bg-white p-4 justify-center rounded-sm'>
        <Header />
        <div className='flex flex-col px-8 mt-2 lg:space-y-6'>
          <Select label='Kullanılan Para Birimi' value='Türk Lirası - ₺'>
            {CURRENCIES.map((currency) => (
              <Option key={currency.value}>
                {currency.title}
              </Option>
            ))}
          </Select>
          <Select label='Dil Değiştir' value={'Türkçe'}>
            {LANGUAGES.map((lang) => (
              <Option key={lang.value}>
                {lang.title}
              </Option>
            ))}
          </Select>
        </div>
        <div className='flex justify-end mt-6 mr-6'>
          <Button className='px-8 py-2 capitalize bg-green-600 rounded-md'>
            <Typography variant='h6' className='font-inter text-white'> Kaydet </Typography>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default LangAreaSettings