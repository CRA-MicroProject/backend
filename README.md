# backend
Endpoints to retrieve and update the CRA database



#endpoints

1. /crahelper/getAvailableLanguages

[
  {
    "locale_code": "pt-BR",
    "language_name_english": "Portuguese (Brazil)",
    "language_name_native": "Português"
  },
  {
    "locale_code": "mn",
    "language_name_english": "Mongolian",
    "language_name_native": "Монгол хэл"
  }
]



2)/crahelper/getAllEnglishTerms

[
  {
    "term_id": 1,
    "original_term": "T1 General (Income Tax and Benefit Return)",
    "original_description": "This is the official name of the tax return form every Canadian resident files. Think of it as the master document where you report your income, claim deductions, and calculate your tax refund or amount owing.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 2,
    "original_term": "T4 (Statement of Remuneration Paid)",
    "original_description": "If you are an employee, this is your most important slip. Your employer gives you one by the end of February. It shows your total employment income, and the amounts deducted for Income Tax, Canada Pension Plan (CPP), and Employment Insurance (EI).",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 3,
    "original_term": "T4A (Statement of Pension, Retirement, Annuity, and Other Income)",
    "original_description": "You might receive this for various types of income not on a regular T4, such as scholarships, bursaries, self-employed income (if you invoiced), or research grants.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 4,
    "original_term": "RRSP (Registered Retirement Savings Plan)",
    "original_description": "A savings account that the government registers to help you save for retirement. The key benefit is that contributions you make to an RRSP can be used to lower your taxable income for the year, potentially giving you a larger refund.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 5,
    "original_term": "TFSA (Tax-Free Savings Account)",
    "original_description": "While not a deduction on your tax return, any interest or growth earned inside a TFSA is tax-free, even when you withdraw it. It's crucial to know your TFSA contribution room starts accumulating the year you turn 18, even if you just arrived in Canada (the CRA sets your limit based on your residency).",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 6,
    "original_term": "CRA (Canada Revenue Agency)",
    "original_description": "This is the government agency that administers tax laws and collects taxes. They are the ones you file your return with and the ones who send out benefit payments like the GST/HST credit.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 7,
    "original_term": "Notice of Assessment (NOA)",
    "original_description": "This is the document you receive after the CRA processes your tax return. It's not just a receipt; it confirms your filing, shows your RRSP contribution limit for next year, and is often required when applying for loans or mortgages.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 8,
    "original_term": "GST/HST Credit",
    "original_description": "A tax-free quarterly payment made to low- and modest-income individuals and families to offset the Goods and Services Tax / Harmonized Sales Tax they pay. Newcomers must apply for this (often by checking a box on their tax return or using Form RC151).",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 9,
    "original_term": "CCB (Canada Child Benefit)",
    "original_description": "A tax-free monthly payment made to eligible families to help with the cost of raising children under 18. Like the GST/HST credit, you must apply for this, usually when you register your child's birth or through CRA My Account.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 10,
    "original_term": "Tax Deduction",
    "original_description": "An expense you can subtract from your total income to lower your taxable income. The lower your taxable income, the less tax you pay. For example, contributing to an RRSP or paying child care expenses are deductions.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 11,
    "original_term": "Tax Credit",
    "original_description": "An amount that is subtracted directly from the tax you owe. They are more valuable than deductions. Some are \"non-refundable\" (they can only reduce your tax to zero) and some are \"refundable\" (they can give you a refund even if you paid no tax).",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 12,
    "original_term": "Basic Personal Amount (BPA)",
    "original_description": "This is the most common non-refundable tax credit. It is the amount of income you can earn in a year without paying federal income tax. Everyone who files a return claims this.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 13,
    "original_term": "Filing Deadline",
    "original_description": "The last day you can file your taxes to avoid late penalties. For most people, this is April 30th of the following year. If you or your spouse/common-law partner have self-employment income, the deadline is June 15th, but any balance owing is still due by April 30th.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 14,
    "original_term": "Balance Owing",
    "original_description": "The amount of tax you still owe to the CRA after all your credits and deductions have been applied. This must be paid by the April 30th deadline.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 15,
    "original_term": "Refund",
    "original_description": "The money the CRA sends you back if you paid more tax throughout the year (through payroll deductions) than you actually owed.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 16,
    "original_term": "Resident vs. Non-Resident for Tax Purposes",
    "original_description": "This is crucial for newcomers. It determines whether you file a Canadian tax return on your worldwide income (resident) or only on Canadian-source income (non-resident). You generally become a resident for tax purposes once you establish significant residential ties in Canada (like a home, spouse, or dependents).",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 17,
    "original_term": "Deemed Disposition",
    "original_description": "When you arrive in Canada, the CRA usually \"deems\" you to have sold certain assets (like stocks or properties) at their fair market value. This \"steps up\" the cost base, meaning you generally only pay tax on gains that happen after you become a Canadian resident.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 18,
    "original_term": "Foreign Tax Credit",
    "original_description": "If you paid income tax to another country on income you earned there after becoming a Canadian resident, you may be able to claim a credit on your Canadian return to avoid paying double tax on the same income.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 19,
    "original_term": "T1135 (Foreign Income Verification Statement)",
    "original_description": "If you are a resident and own specified foreign property (like bank accounts or shares in a non-Canadian company) that cost more than $100,000 CAD at any time in the year, you must file this form separately. The penalties for missing it can be severe.",
    "created_at": "2026-02-25T13:23:03.981Z"
  },
  {
    "term_id": 20,
    "original_term": "CRA My Account",
    "original_description": "The secure online portal where you can view your NOA, change your address, check your benefit payments (like CCB), see your unused tuition and RRSP limits, and track the status of your tax return. It is highly recommended to sign up for this.",
    "created_at": "2026-02-25T13:23:03.981Z"
  }
]


3) /crahelper/getTermTranslation?termId=XX&lang=YYY
3.1) /crahelper/getTermTranslation?termId=1&lang=pt-br
{
  "translation_id": 21,
  "term_id": 1,
  "locale_code": "pt-BR",
  "translated_term": "T1 Geral (Declaração de Imposto de Renda e Benefícios)",
  "translated_description": "Este é o nome oficial do formulário de declaração de imposto de renda que todo residente canadense preenche. Pense nele como o documento principal onde você declara sua renda, solicita deduções e calcula seu reembolso de imposto ou o valor devido.",
  "verified_by": "katia_santos",
  "translation_datetime": "2026-02-25T13:26:49.746Z",
  "created_at": "2026-02-25T13:26:49.746Z"
}


3.2) /crahelper/getTermTranslation?termId=1&lang=mn

{
  "translation_id": 1,
  "term_id": 1,
  "locale_code": "mn",
  "translated_term": "T1 (Орлого ба Тэтгэмжийн Татварын Маягт - T1)",
  "translated_description": "Энэ бол Канадын оршин суугч бүрийн бөглөдөг татварын тайлангийн албан ёсны нэр юм. Үүнийг та орлогоо мэдүүлэх, татвараас хасагдах зардлаа нэхэмжлэх, татварын буцаан олголт эсвэл үлдэгдэл төлбөрөө тооцох үндсэн баримт бичиг гэж үзэж болно.",
  "verified_by": "minjee_ganbaatar",
  "translation_datetime": "2026-02-25T13:24:42.945Z",
  "created_at": "2026-02-25T13:24:42.945Z"
}
