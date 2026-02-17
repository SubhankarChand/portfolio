from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Load secret keys from .env file
load_dotenv()

app = FastAPI()

# Allow the frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data format we expect from the frontend
class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
async def send_email(contact: ContactRequest):
    sender_email = os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASS")
    receiver_email = os.getenv("EMAIL_USER") # Sending to yourself

    if not sender_email or not sender_password:
        raise HTTPException(status_code=500, detail="Server email configuration missing.")

    # Create the email content
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"Portfolio Contact: {contact.name}"

    body = f"""
    You received a new message from your portfolio site!
    
    Name: {contact.name}
    Email: {contact.email}
    
    Message:
    {contact.message}
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        # Connect to Gmail Server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        return {"message": "Email sent successfully!"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def read_root():
    return {"status": "Backend is running"}