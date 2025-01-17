import { Button } from "./button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./dialog";

interface WelcomeDialogProps {
  showWelcomeDialog: boolean;
  setShowWelcomeDialog: (show: boolean) => void;
}

export const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ showWelcomeDialog, setShowWelcomeDialog }) => {
  return (
    <Dialog
      open={showWelcomeDialog}
      onOpenChange={setShowWelcomeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to the Capsule Walkthrough</DialogTitle>
          <DialogDescription>
            This tutorial will walk you through using Capsule for authentication and signing. Code snippets will update
            dynamically based on your selections—feel free to copy them into your own application.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setShowWelcomeDialog(false)}>Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
