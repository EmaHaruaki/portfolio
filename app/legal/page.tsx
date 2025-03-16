"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Github, Instagram, X } from "lucide-react"

export default function Legal() {
  useEffect(() => {
    const metaTag = document.createElement("meta")
    metaTag.name = "robots"
    metaTag.content = "noindex"
    document.head.appendChild(metaTag)

    return () => {
      document.head.removeChild(metaTag)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-foreground">
            Portfolio
          </Link>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <div className="relative">
          <img src="/image_fx_4.jpg" alt="Hero Image" className="w-full sm:h-48 h-24 object-cover object-top" />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/*<h1 className="text-3xl font-bold text-white">特定商取引法に基づく表記</h1>*/}
          </div>
        </div>
        <div className="container py-16">
          <h1 className="text-3xl font-bold mb-8 text-center">特定商取引法に基づく表記</h1>
          <div className="mx-auto max-w-4xl">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">項目</th>
                  <th className="py-2 px-4 border-b">説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">販売業社の名称</td>
                  <td className="py-2 px-4 border-b">えまはるあき</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">販売業者の氏名（名称）、住所、電話番号</td>
                  <td className="py-2 px-4 border-b">*請求があったら遅滞なく開示します。</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">メールアドレス</td>
                  <td className="py-2 px-4 border-b">
                  <img src="/email.png" alt="Email" className="inline-block min-w-[200px] max-w-full h-[35px]" />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">追加手数料等の追加料金</td>
                  <td className="py-2 px-4 border-b">該当しない</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">交換および返品（返金ポリシー）</td>
                  <td className="py-2 px-4 border-b">商品の性質上、返品は承っておりません。</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">引渡時期</td>
                  <td className="py-2 px-4 border-b">お客様とのご相談により決定します。</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">受け付け可能な決済手段</td>
                  <td className="py-2 px-4 border-b">クレジットカード</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">決済期間</td>
                  <td className="py-2 px-4 border-b">ただちに処理されます。</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">販売価格</td>
                  <td className="py-2 px-4 border-b">【初期費用】<br />20,000円<br />【更新費用】<br />20,000円/年<br />【保守費用】<br />2,000円/月<br />【オプション費用】<br />お客様とのご相談により決定します。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} えまはるあき. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/EmaHaruaki/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.instagram.com/emma__web_design/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/ky2rz4" className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
            <Link href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}