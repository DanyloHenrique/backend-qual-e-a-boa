export function getWelcomeTemplate() {
  // Cores da marca (ajuste conforme seu design)
  const brandColor = "#4F46E5" // Indigo/Roxo
  const bgColor = "#F3F4F6" // Cinza claro
  const textColor = "#1F2937" // Cinza escuro


  return `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* Resets básicos para garantir consistência entre Gmail, Outlook, etc. */
          body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: ${bgColor}; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; margin-top: 40px; margin-bottom: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
          .header { background-color: ${brandColor}; padding: 30px; text-align: center; }
          .content { padding: 40px 30px; color: ${textColor}; line-height: 1.6; }
          .button { display: inline-block; padding: 12px 24px; background-color: ${brandColor}; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="color: white; margin: 0; font-size: 24px;">Qual é a boa?</h1>
          </div>
  
          <div class="content">
            <h2 style="margin-top: 0; color: ${textColor};">Olá! 👋</h2>
            
            <p>Seja muito bem-vindo(a)! Estamos felizes em ter você conosco.</p>
            
            <p>Agora você tem acesso aos melhores eventos da cidade na palma da sua mão.</p>
            
            <p>Se prepare para novas experiências e muito networking.</p>
  
          </div>
  
          <div class="footer">
            <p>© ${new Date().getFullYear()} Qual é a boa? Todos os direitos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `
}
