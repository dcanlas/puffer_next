import { useRouter } from "next/router";
import LookupForm from "./LookupForm";

/**
 * LookupWidget Component
 *
 * A specialized wrapper for the home page that handles navigation
 * to the check-availability page with URL parameters.
 *
 * This component uses the generic LookupForm and adds redirect functionality.
 */
export default function LookupWidget() {
  const router = useRouter();

  const handleSubmit = (formData) => {
    // Redirect to check-availability page with query parameters
    const params = new URLSearchParams({
      checkIn: formData.checkIn.format("YYYY-MM-DD"),
      checkOut: formData.checkOut.format("YYYY-MM-DD"),
      guests: formData.guests.toString(),
    });

    router.push(`/check-availability?${params.toString()}`);
  };

  return <LookupForm onSubmit={handleSubmit} submitButtonText="Check Now" showTitle={false} />;
}
