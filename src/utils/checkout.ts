// Whop checkout integration
declare global {
  interface Window {
    Whop: {
      openCheckout: (config: {
        url: string;
        type: string;
        position: string;
        theme: string;
      }) => void;
    };
  }
}

export const openWhopCheckout = () => {
  if (typeof window !== 'undefined' && window.Whop) {
    window.Whop.openCheckout({
      url: "https://whop.com/checkout/plan_9Q7oCRiEiIMnK?d2c=true",
      type: "drawer",
      position: "right",
      theme: "dark"
    });
  } else {
    // Fallback if Whop script hasn't loaded yet
    window.open("https://whop.com/checkout/plan_9Q7oCRiEiIMnK?d2c=true", "_blank");
  }
};