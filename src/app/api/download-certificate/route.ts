import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🧾 Certificate Data Object
    const {
      name,
      course,
      location,
      startDate,
      endDate,
      hours,
      certificateType,
    } = body;
    const certificateUrl =
      certificateType == "attendance"
        ? "public/certificate-attendance.jpg"
        : "public/certificate-achievement.jpg";

    const imagePath = path.join(process.cwd(), certificateUrl);
    const imageBytes = fs.readFileSync(imagePath);

    const pdfDoc = await PDFDocument.create();
    const jpgImage = await pdfDoc.embedJpg(imageBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const { width, height } = jpgImage.scale(1);
    const page = pdfDoc.addPage([width, height]);
    const fromTop = (value: number) => height - value;
    const italicFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    // Background
    page.drawImage(jpgImage, { x: 0, y: 0, width, height });

    // 🖊 Dynamic Text
    page.drawText(course || "Course Title", {
      ...(certificateType === "attendance"
        ? { x: 300, y: fromTop(820) }
        : { x: 300, y: fromTop(820) }),
      size: 72,
      font: italicFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(name || "Learner Name", {
      ...(certificateType === "attendance"
        ? { x: 300, y: fromTop(1230) }
        : { x: 300, y: fromTop(1300) }),

      size: 96,
      font: italicFont,
      color: rgb(0, 0, 0),
    });
    page.drawText("2222", {
      ...(certificateType === "attendance"
        ? { x: 580, y: fromTop(1422) }
        : { x: 760, y: fromTop(1515) }),
      size: 46,
      font,
      color: rgb(0, 0, 0),
    });
    // Right values
    page.drawText(location || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(1660) }
        : { x: 1450, y: fromTop(1755) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(startDate || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(1755) }
        : { x: 1450, y: fromTop(1840) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(endDate || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(1845) }
        : { x: 1450, y: fromTop(1925) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(hours || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(1925) }
        : { x: 1450, y: fromTop(2005) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(hours || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(2005) }
        : { x: 1450, y: fromTop(2090) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(hours || "-", {
      ...(certificateType === "attendance"
        ? { x: 1450, y: fromTop(2085) }
        : { x: 1450, y: fromTop(2175) }),
      size: 48,
      font,
      color: rgb(0, 0, 0),
    });
    certificateType !== "attendance" &&
      page.drawText(hours || "-", {
        ...(certificateType === "attendance"
          ? { x: 1450, y: fromTop(2085) }
          : { x: 1450, y: fromTop(2250) }),
        size: 48,
        font,
        color: rgb(0, 0, 0),
      });

    const pdfBytes: any = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=certificate.pdf",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to generate certificate" },
      { status: 500 },
    );
  }
}
