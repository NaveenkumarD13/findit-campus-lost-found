export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: "What is FindIt?",
    answer:
      "FindIt is a campus lost and found management system that helps students and staff report, search, and recover lost belongings efficiently.",
  },
  {
    id: 2,
    question: "How do I report a lost item?",
    answer:
      "Navigate to the 'Report Lost' page, provide the item details, last known location, date, and optionally upload an image before submitting the report.",
  },
  {
    id: 3,
    question: "How do I report a found item?",
    answer:
      "Go to the 'Report Found' page and provide the item's details, where it was found, and upload a clear photo if available.",
  },
  {
    id: 4,
    question: "How is ownership verified?",
    answer:
      "Before returning an item, the administrator verifies ownership using item details, identifying characteristics, and supporting information provided by the claimant.",
  },
  {
    id: 5,
    question: "Can I edit my report later?",
    answer:
      "Yes. After signing in, you can update or remove your own lost or found reports whenever necessary.",
  },
  {
    id: 6,
    question: "Who can use FindIt?",
    answer:
      "FindIt is designed for students, faculty members, and campus staff who are part of the institution.",
  },
];