
interface UserAuthorizations {
    title: string,
    authorizations: string[]
}

export const userAuthorizations: UserAuthorizations[] = [
    {
        title: "Cafe Tanım Yetkilendirmeleri",
        authorizations: [
            "Masa ve Bölge İşlemleri",
            "Cafe ile ilgili genel tanımlamalar",
            "Kategori ve ürün işlemleri",
            "Yetkilendirme işlemleri",
            "Stok işlemleri",
        ]
    },
    {
        title: "Gider/Masraf Yetkilendirmeleri",
        authorizations:[
            "Gider ekleyebilir",
            "Gider düzenleyebilir ve silebilir"
        ],
    },
    {
        title:"Sipariş Yetkilendirmeleri",
        authorizations:[
            "Genel sipariş işlemleri",
            "Ödeme sırasında indirim yapabilir",
            "Ödeme alabilir",
            "Sipariş iptal edebilir",
        ]
    },
    {
        title:"Mutfak Yetkilendirmeleri",
        authorizations:["Mutfak ekranını görüntüleme, sipariş hazırlama"]
    },
    {
        title:"Rapor Yetkilendirmeleri",
        authorizations:[
            "Tüm raporlamaları görebilir",
            "Gün sonu işlemleri",
            "Gider / masraf işlemleri"
        ]
    }
]