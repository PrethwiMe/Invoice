// function generatePDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     // Invoice Header
//     doc.setFontSize(12);
//     doc.text("TELE TECH ENGINEERING", 14, 15);
//     doc.text("PANASONIC AUTHORIZED SERVICE CENTER", 14, 22);
//     doc.text("SBM 13/364B1", 14, 29);
//     doc.text("WAYANAD, KERALA - 673592", 14, 36);
//     doc.text("GSTIN: 32ESFPK0815Q1ZK", 14, 43);

//     // Bill To Section
//     let billToText = document.getElementById("billTo").value || "N/A";
//     doc.text("Bill To:", 14, 55);
//     doc.setFontSize(10);
//     doc.text(doc.splitTextToSize(billToText, 180), 14, 62); // Auto text wrap

//     // Invoice Details
//     const date = document.getElementById("invoiceDate").value || "N/A";
//     const invoiceNo = document.getElementById("invoiceNumber").value || "N/A";
//     doc.text(`Invoice No: ${invoiceNo}`, 140, 55);
//     doc.text(`Date: ${date}`, 140, 62);

//     // Product Details
//     const serialNumber = document.getElementById("serialNumber").value || "N/A";
//     const modelNumber = document.getElementById("modelNumber").value || "N/A";
//     const complaintNumber = document.getElementById("complaintNumber").value || "N/A";
//     const problemObserved = document.getElementById("problemObserved").value || "N/A";

//     doc.text("Product Details:", 14, 75);
//     doc.text(`Serial No: ${serialNumber}`, 14, 82);
//     doc.text(`Model No: ${modelNumber}`, 14, 89);
//     doc.text(`Complaint No: ${complaintNumber}`, 14, 96);
//     doc.text(doc.splitTextToSize(`Problem Observed: ${problemObserved}`, 180), 14, 103); // Wrap text

//     // Items Table
//     const tableData = [];
//     const rows = document.querySelectorAll("#itemsTable tbody tr");

//     rows.forEach((row, index) => {
//         const itemName = row.querySelector(".itemName").value || "";
//         const hsnSac = row.querySelector(".hsnSac").value || "";
//         const qty = row.querySelector(".quantity").value || 0;
//         const rate = row.querySelector(".rate").value || 0;
//         const igstAmount = row.querySelector(".igstAmount").value || 0;
//         const totalAmount = row.querySelector(".totalAmount").value || 0;

//         tableData.push([
//             index + 1,
//             doc.splitTextToSize(itemName, 30), // Wrap long text
//             hsnSac,
//             qty,
//             rate,
//             "18%", // IGST static
//             igstAmount,
//             totalAmount
//         ]);
//     });

//     doc.autoTable({
//         startY: 115, // Start position below product details
//         head: [['Sl. No', 'Name of Item', 'HSN/SAC', 'Qty', 'Rate', 'IGST (%)', 'IGST Amount', 'Total']],
//         body: tableData,
//         styles: { fontSize: 8, cellWidth: 'wrap', valign: 'middle' }, // Auto text wrap
//         columnStyles: {
//             1: { cellWidth: 35 }, // Adjust column widths as needed
//             2: { cellWidth: 20 },
//             4: { cellWidth: 20 },
//             6: { cellWidth: 20 },
//         },
//         theme: 'grid',
//     });

//     // Totals Section
//     const taxableAmount = document.getElementById("taxableAmount").value || 0;
//     const igstTotal = document.getElementById("igstTotal").value || 0;
//     const grandTotal = document.getElementById("grandTotal").value || 0;

//     doc.setFontSize(10);
//     doc.text(`Taxable Amount: ${taxableAmount}`, 140, doc.lastAutoTable.finalY + 10);
//     doc.text(`IGST 18%: ${igstTotal}`, 140, doc.lastAutoTable.finalY + 16);
//     doc.text(`Grand Total: ${grandTotal}`, 140, doc.lastAutoTable.finalY + 22);

//     // Footer
//     doc.text("For Tele Tech Engineering", 14, doc.lastAutoTable.finalY + 40);
//     doc.text("Authorised Signatory", 140, doc.lastAutoTable.finalY + 40);

//     // Save PDF
//     doc.save("invoice.pdf");
// }
// echo "# Invoice" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PrethwiMe/Invoice.git
// git push -u origin main