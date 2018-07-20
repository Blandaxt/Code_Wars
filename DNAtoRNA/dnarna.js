// 8 kyu
// DNA to RNA Conversion
//
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//
// Create a funciton which translates a given DNA string into RNA.
//
// For example:
//
// DNAtoRNA("GCAT") returns ("GCAU")
//
// Solution:

// /T/g
// function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  const DNAtoRNA = dna => dna.replace(/T/g, 'U');
// }
//
// Sample Tests:
//
// Test.assertEquals(DNAtoRNA("TTTT"), "UUUU")
// Test.assertEquals(DNAtoRNA("GCAT"), "GCAU")
// Test.assertEquals(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
