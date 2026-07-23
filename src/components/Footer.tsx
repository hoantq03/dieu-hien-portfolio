import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const addressLines = t.footer.addressValue.split('\n')

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div>
          <div className="footer-talk">{t.footer.talk}</div>
          <a className="footer-email" href="mailto:nguyenthidieuhienpy2005@gmail.com">
            NGUYENTHIDIEUHIENPY2005@GMAIL.COM
          </a>
        </div>
        <div className="footer-social">
          <a href="tel:0384129224" aria-label="Hotline">
            HOTLINE <span>0384129224</span>
          </a>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <h5>{t.footer.address}</h5>
          <p>
            {addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <h5>{t.footer.phone}</h5>
          <p>
            <a href="tel:0384129224">0384 129 224</a>
          </p>
        </div>
        <div>
          <h5>{t.footer.email}</h5>
          <a href="mailto:nguyenthidieuhienpy2005@gmail.com">
            nguyenthidieuhienpy2005@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-brand">Nguyễn Thị Diệu Hiền</div>
    </footer>
  )
}
